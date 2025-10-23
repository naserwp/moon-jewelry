import { useEffect, useMemo, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../../firebase/firebase.config";
import useTitle from "../../../hooks/useTitle";

const initialFormState = {
  code: "",
  discount: "",
  expiresAt: "",
  description: "",
};

const OwnerDashboard = () => {
  useTitle("Owner Dashboard");

  const [coupons, setCoupons] = useState([]);
  const [couponForm, setCouponForm] = useState(initialFormState);
  const [formError, setFormError] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoadingCoupons, setIsLoadingCoupons] = useState(true);
  const [tableError, setTableError] = useState("");
  const [deletingCouponId, setDeletingCouponId] = useState("");

  const minExpirationDate = useMemo(
    () => new Date().toISOString().split("T")[0],
    []
  );

  useEffect(() => {
    const couponsQuery = query(
      collection(db, "coupons"),
      orderBy("createdAt", "desc")
    );

    let unsubscribe = () => {};

    try {
      unsubscribe = onSnapshot(
        couponsQuery,
        (snapshot) => {
          const parsedCoupons = snapshot.docs.map((couponDoc) => {
            const data = couponDoc.data();
            return {
              id: couponDoc.id,
              code: data.code ?? "",
              discount: data.discount ?? 0,
              expiresAt: data.expiresAt ?? "",
              description: data.description ?? "",
              createdAt:
                typeof data.createdAt?.toDate === "function"
                  ? data.createdAt.toDate()
                  : null,
            };
          });

          setCoupons(parsedCoupons);
          setTableError("");
          setIsLoadingCoupons(false);
        },
        (error) => {
          console.error("Failed to load coupons", error);
          setTableError("Failed to load coupons. Please try again.");
          setIsLoadingCoupons(false);
        }
      );
    } catch (error) {
      console.error("Failed to subscribe to coupons", error);
      setTableError("Failed to load coupons. Please try again.");
      setIsLoadingCoupons(false);
    }

    return unsubscribe;
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStatusMessage("");
    setFormError("");
    setCouponForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleCreateCoupon = async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setFormError("");
    setStatusMessage("");

    const trimmedCode = couponForm.code.trim();
    const trimmedDescription = couponForm.description.trim();
    const numericDiscount = Number(couponForm.discount);

    if (!trimmedCode) {
      setFormError("Coupon code is required.");
      return;
    }

    if (
      Number.isNaN(numericDiscount) ||
      numericDiscount <= 0 ||
      numericDiscount > 100
    ) {
      setFormError("Discount must be a number between 1 and 100.");
      return;
    }

    if (!couponForm.expiresAt) {
      setFormError("An expiration date is required.");
      return;
    }

    const doesCouponExist = coupons.some(
      (coupon) => coupon.code.toLowerCase() === trimmedCode.toLowerCase()
    );

    if (doesCouponExist) {
      setFormError("A coupon with this code already exists.");
      return;
    }

    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "coupons"), {
        code: trimmedCode,
        discount: numericDiscount,
        expiresAt: couponForm.expiresAt,
        description: trimmedDescription,
        createdAt: serverTimestamp(),
      });

      setCouponForm(initialFormState);
      setStatusMessage("Coupon created successfully.");
    } catch (error) {
      console.error("Failed to create coupon", error);
      setFormError("Unable to create coupon. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRemoveCoupon = async (couponId) => {
    if (!couponId) {
      return;
    }

    setStatusMessage("");
    setTableError("");
    setDeletingCouponId(couponId);

    try {
      await deleteDoc(doc(db, "coupons", couponId));
      setStatusMessage("Coupon removed successfully.");
    } catch (error) {
      console.error("Failed to remove coupon", error);
      setTableError("Failed to remove coupon. Please try again.");
    } finally {
      setDeletingCouponId("");
    }
  };

  const formatExpirationDate = (value) => {
    if (!value) {
      return "—";
    }

    if (typeof value?.toDate === "function") {
      return value.toDate().toLocaleDateString();
    }

    if (value instanceof Date) {
      return value.toLocaleDateString();
    }

    const parsedDate = new Date(`${value}T00:00:00`);

    if (Number.isNaN(parsedDate.getTime())) {
      return value;
    }

    return parsedDate.toLocaleDateString();
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-6">Owner Dashboard</h1>

      {/* Store Overview Section */}
      <section className="mb-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Store Overview</h2>
        {/* Display store-related information (e.g., sales, inventory) */}
      </section>

      {/* Product Management Section */}
      <section className="mb-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Product Management</h2>
        {/* Provide options for managing products (e.g., add, edit, delete) */}
      </section>

      {/* Orders Section */}
      <section className="mb-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Orders</h2>
        {/* Display a list of recent orders and order-related actions */}
      </section>

      {/* Analytics Section */}
      <section className="mb-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Analytics</h2>
        {/* Display charts or graphs to visualize store analytics */}
      </section>

      {/* Customer Feedback Section */}
      <section className="mb-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Customer Feedback</h2>
        {/* Display feedback and ratings from customers */}
      </section>

      {/* Coupon Management Section */}
      <section className="mb-8 p-6 bg-white rounded-lg shadow-md">
        {(statusMessage || tableError) && (
          <div className="mb-4 space-y-2">
            {statusMessage && (
              <div
                className="rounded-md bg-green-50 px-4 py-3 text-sm text-green-700"
                role="status"
              >
                {statusMessage}
              </div>
            )}
            {tableError && (
              <div
                className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-700"
                role="alert"
              >
                {tableError}
              </div>
            )}
          </div>
        )}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="lg:w-1/2">
            <h2 className="text-xl font-semibold mb-4">Create Coupon</h2>
            <p className="text-sm text-gray-500 mb-6">
              Generate unique coupon codes with a discount percentage and expiration date.
            </p>
            <form onSubmit={handleCreateCoupon} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="code">
                  Coupon Code
                </label>
                <input
                  id="code"
                  name="code"
                  type="text"
                  value={couponForm.code}
                  onChange={handleChange}
                  placeholder="e.g. MOON25"
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="discount">
                  Discount (%)
                </label>
                <input
                  id="discount"
                  name="discount"
                  type="number"
                  min="1"
                  max="100"
                  value={couponForm.discount}
                  onChange={handleChange}
                  placeholder="e.g. 20"
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="expiresAt">
                  Expiration Date
                </label>
                <input
                  id="expiresAt"
                  name="expiresAt"
                  type="date"
                  min={minExpirationDate}
                  value={couponForm.expiresAt}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="description">
                  Description (optional)
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="3"
                  value={couponForm.description}
                  onChange={handleChange}
                  placeholder="Add a short note about the promotion."
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                />
              </div>

              {formError && (
                <p className="text-sm text-red-600" role="alert">
                  {formError}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full rounded-md bg-indigo-600 px-4 py-2 font-semibold text-white transition focus:outline-none focus:ring-2 focus:ring-indigo-200 ${
                  isSubmitting
                    ? "cursor-not-allowed opacity-70"
                    : "hover:bg-indigo-700"
                }`}
              >
                {isSubmitting ? "Creating..." : "Create Coupon"}
              </button>
            </form>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-xl font-semibold mb-4">Active Coupons</h2>
            {isLoadingCoupons ? (
              <p className="text-sm text-gray-500">Loading coupons...</p>
            ) : tableError ? (
              <p className="text-sm text-red-600">Unable to display coupons right now.</p>
            ) : coupons.length === 0 ? (
              <p className="text-sm text-gray-500">No coupons have been created yet.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                        Code
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                        Discount
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                        Expires
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                        Description
                      </th>
                      <th className="px-4 py-2 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {coupons.map((coupon) => (
                      <tr key={coupon.id}>
                        <td className="px-4 py-3 font-semibold text-gray-900">{coupon.code}</td>
                        <td className="px-4 py-3 text-gray-700">{coupon.discount}%</td>
                        <td className="px-4 py-3 text-gray-700">
                          {formatExpirationDate(coupon.expiresAt)}
                        </td>
                        <td className="px-4 py-3 text-gray-600">
                          {coupon.description || "—"}
                        </td>
                        <td className="px-4 py-3 text-right">
                          <button
                            type="button"
                            onClick={() => handleRemoveCoupon(coupon.id)}
                            disabled={deletingCouponId === coupon.id}
                            className={`rounded-md bg-red-500 px-3 py-1 text-sm font-medium text-white transition focus:outline-none focus:ring-2 focus:ring-red-200 ${
                              deletingCouponId === coupon.id
                                ? "cursor-not-allowed opacity-70"
                                : "hover:bg-red-600"
                            }`}
                          >
                            {deletingCouponId === coupon.id ? "Removing..." : "Delete"}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Settings Section */}
      <section className="mb-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Settings</h2>
        {/* Provide options for configuring store settings */}
      </section>

      {/* Footer Section */}
      <footer className="text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </footer>
    </div>
  );
};

export default OwnerDashboard;
