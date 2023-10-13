import React from 'react';
import SectionHeading from '../../component/SectionHeading/SectionHeading';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Terms = () => {
    useTitle('Terms and Conditions') 
    return (
        <div>
            <div className='py-20 px-7'>
                <SectionHeading
                    subHeading={'By using the Jewelry-Dokan website'}
                    heading={'Terms and Conditions'}
                ></SectionHeading>
            </div>
            <div className="bg-gray-100 py-10">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-semibold mb-4">Terms and Conditions</h1>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                        <p className="mb-4">
                            By using the Jewelry-Dokan website and purchasing products from us, you agree to abide by these Terms and Conditions.
                            If you do not agree to these terms, please refrain from using our services.
                        </p>
                        <h2 className="text-xl font-semibold mb-2">1. Use of the Website</h2>
                        <p className="mb-4">
                            - You must be at least 18 years old or have parental consent to use this website.
                            <br />
                            - You are responsible for maintaining the security of your account and password.
                        </p>

                        <h2 className="text-xl font-semibold mb-2">2. Product Descriptions</h2>
                        <p className="mb-4">
                            - We strive to provide accurate descriptions and images of our jewelry products.
                            <br />
                            - However, we cannot guarantee that colors and details will be displayed accurately on your device.
                        </p>

                        <h2 className="text-xl font-semibold mb-2">3. Pricing and Payment</h2>
                        <p className="mb-4">
                            - All prices are in US dollars and are subject to change without notice.
                            <br />
                            - Payment is required at the time of purchase.
                        </p>

                        <h2 className="text-xl font-semibold mb-2">4. Shipping and Returns</h2>
                        <p className="mb-4">
                            - Please review our Shipping and Returns policy for detailed information.
                        </p>

                        <h2 className="text-xl font-semibold mb-2">5. Privacy Policy</h2>
                        <p className="mb-4">
                            - Your use of our website is governed by our Privacy Policy.
                            <br />
                            - By using our services, you consent to the collection and use of your information as described in our Privacy Policy.
                        </p>

                        <h2 className="text-xl font-semibold mb-2">6. Contact Information</h2>
                        <p className="mb-4">
                            - For questions or concerns regarding these Terms and Conditions, please contact us at contact@jewelry-dokan.com.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                        <p className='py-16 bg-gray-100 rounded text-center text-xl text-gray-600'>Go back to <Link to="/signup" className='text-red-800 underline'>Register</Link></p>
                        <section className="mb-8">
                            <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
                            <p>
                                Welcome to Jewelry-Dokan. By accessing or using our website, you agree to comply with and be bound by these Terms and Conditions.
                                If you do not agree with these Terms, please do not use our services.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold mb-2">2. User Age</h2>
                            <p>
                                You must be at least 18 years old to use our services or have parental consent. By using our website, you confirm that you meet this age requirement.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold mb-2">3. Privacy Policy</h2>
                            <p>
                                Your use of our website is also governed by our Privacy Policy. Please review it to understand how we collect, use, and protect your personal information.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold mb-2">4. Product Information</h2>
                            <p>
                                We strive to provide accurate descriptions and images of our jewelry products. However, colors and details may vary based on your device. Product availability is subject to change without notice.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold mb-2">5. Payment and Pricing</h2>
                            <p>
                                All prices are in US dollars and are subject to change without notice. Payment is required at the time of purchase, and we accept major credit and debit cards for online payments.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold mb-2">6. Shipping and Returns</h2>
                            <p>
                                Please review our Shipping and Returns policy for detailed information on delivery times, returns, and exchanges. Shipping times may vary, and we are not responsible for delays caused by shipping carriers.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold mb-2">7. Intellectual Property</h2>
                            <p>
                                All content on this website, including text, graphics, logos, and images, is the property of Jewelry-Dokan and is protected by copyright laws. Unauthorized use of any content on this website is strictly prohibited.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold mb-2">8. Contact Information</h2>
                            <p>
                                If you have any questions or concerns about these Terms and Conditions, please contact us at contact@jewelry-dokan.com.
                            </p>
                        </section>

                        <p className="text-center text-sm text-gray-600">
                            Last updated: [Insert Last Update Date]
                        </p>
                        <p className='text-center text-xl text-gray-600'>Go back to <Link to="/signup" className='text-red-800 underline'>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terms;
