import React from 'react'
import "./contact.css"

const Contact = () => {
    return (<>
        <div className="row">
            <div className="col">
                <h2>Navnath Trader's</h2>
                <p>N-43-C/A-1/15-4, Navnath Trader's,<br />
                    trimurti chowk, cidco, Nashik <br />
                    Phone: +91 91587 44445 / 22-42644344 <br />
                    Timings: 9.00 am to 9.00 pm (Mon-Sat) <br/>
                    Email : navnathhardware@gmail.com</p>
            </div>
            <div className="col">
                <h3 class="uppercase">Get in Touch</h3>
                <div className="contact-form">
                    <p class="form-field">Message*<br />
                        <textarea name="your-message" cols="40" rows="10" className='textarea' aria-required="true" aria-invalid="false"></textarea>
                    </p>
                    <table>
                        <tbody><tr>
                            <td>
                                <p class="form-field">Name*<br />
                                    <span class="fullName"><input type="text" name="fullName" value="" aria-required="true" aria-invalid="false" /></span></p>
                            </td>
                            <td>
                                <p class="form-field">Company<br />
                                    <span class="company"><input type="text" name="company" value="" class="" aria-invalid="false" /></span> </p>
                            </td>
                        </tr>
                            <tr>
                                <td colspan="2">
                                    <span><select name="state" class=" wpcf7-select" aria-invalid="false"><option value="Select State">Select State</option><option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option><option value="Andhra Pradesh">Andhra Pradesh</option><option value="Arunachal Pradesh">Arunachal Pradesh</option><option value="Assam">Assam</option><option value="Bihar">Bihar</option><option value="Chandigarh">Chandigarh</option><option value="Chhattisgarh">Chhattisgarh</option><option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option><option value="Daman and Diu">Daman and Diu</option><option value="Delhi">Delhi</option><option value="Goa">Goa</option><option value="Gujarat">Gujarat</option><option value="Haryana">Haryana</option><option value="Himachal Pradesh">Himachal Pradesh</option><option value="Jammu and Kashmir">Jammu and Kashmir</option><option value="Jharkhand">Jharkhand</option><option value="Karnataka">Karnataka</option><option value="Kerala">Kerala</option><option value="Ladakh">Ladakh</option><option value="Lakshadweep">Lakshadweep</option><option value="Madhya Pradesh">Madhya Pradesh</option><option value="Maharashtra">Maharashtra</option><option value="Manipur">Manipur</option><option value="Meghalaya">Meghalaya</option><option value="Mizoram">Mizoram</option><option value="Nagaland">Nagaland</option><option value="Odisha">Odisha</option><option value="Puducherry">Puducherry</option><option value="Punjab">Punjab</option><option value="Rajasthan">Rajasthan</option><option value="Sikkim">Sikkim</option><option value="Tamil Nadu">Tamil Nadu</option><option value="Telangana">Telangana</option><option value="Tripura">Tripura</option><option value="Uttar Pradesh">Uttar Pradesh</option><option value="Uttarakhand">Uttarakhand</option><option value="West Bengal">West Bengal</option></select></span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p class="form-field">City*<br />
                                        <span class="city"><input type="text" name="city" value="" class=" wpcf7-validates-as-required" aria-required="true" aria-invalid="false" /></span> </p>
                                </td>
                                <td>
                                    <p class="form-field">Area/Locality<br />
                                        <span class="area"><input type="text" name="area" value="" class="" aria-invalid="false" /></span> </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p class="form-field">Phone*<br />
                                        <span class=" phone"><input type="text" name="phone" value="" class=" wpcf7-validates-as-required" aria-required="true" aria-invalid="false" /></span> </p>
                                </td>
                                <td>
                                    <p class="form-field">Email*<br />
                                        <span class=" email"><input type="email" name="email" value="" class=" wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" /></span> </p>
                                </td>
                            </tr>
                        </tbody></table>

                </div>

            </div>
        </div>
    </>
    )
}

export default Contact