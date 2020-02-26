'use strict';


class Doctor {

    /**
     *
     * @param firstName
     * @param lastName
     * @param address
     * @param aadhaar
     * @param medicalRegistrationNo
     * @param DOB
     * @param gender
     * @param userName
     * @param password
     * @returns {Doctor}
     */

    constructor(firstName, lastName, address, aadhaar, medicalRegistrationNo, DOB, gender, userName, password) {
        if (this.validateAadhaar(aadhaar) && this.validateMedicalRegistratonNo(medicalRegistrationNo)) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.address = address;
            this.aadhaar = aadhaar;
            this.medicalRegistrationNo = medicalRegistrationNo;
            this.DOB = DOB;
            this.gender = gender;
            this.userName = userName;
            this.password = password;
            this.type = 'Doctor';

            if (this.__isContract) {
                delete this.__isContract;
            }
            return this;
        } else if (this.validateAadhaar(aadhaar)) {
            throw new Error(`the medicalregistration id ${medicalRegistrationNo} is not valid`);
        } else {
            throw new Error(`the aadhaar id ${aadhaar} is not valid`);
        }

    }

    /**
     *
     * @param aadhaar
     * @returns {Promise<boolean>}
     */
    async validateAadhaar(aadhaar) {
        return !!aadhaar;
    }

    /**
     *
     * @param medicalRegistrationNo
     * @returns {Promise<boolean>}
     */
    async validateMedicalRegistratonNo(medicalRegistrationNo) {
        return !!medicalRegistrationNo;
    }
}

module.exports = Doctor;
