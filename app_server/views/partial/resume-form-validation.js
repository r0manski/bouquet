/* RESUME FORM VALIDATION JAVASCRIPT START - used for both create-resume and edit resume pages */

//initialize form variables

var firstName;
var lastName;
var gender;
var birth;
var country;
var state;
var city;
var suburb;
var addr1;
var addr2;
var email;
var phoneNumber;
var desiredPosition;
var desiredSalary;
var startWork;
var endWork;
var workPlace;
var workPosition;
var workAchievement;
var eduInstitution;
var eduDepartment;
var eduSpecialization;
var eduGraduation;

// this function is used for validate compulsory inputs of letters and numbers (allowed space)

function isAlpha_RemoveSpace(str) {
    var str = validator.blacklist(str, " ");
    if (validator.isAlpha(str)){
        return true;
    }else{
        return false;
    }
}

// this function is used for validate optional inputs of letters (allowed space)

function isAlphaAllowEmpty_RemoveSpace(str) {
    var str = validator.blacklist(str, " ");
    if (!validator.isEmpty(str)){
        if (validator.isAlpha(str)){
            return true;
        }else{
            return false;
        }
    }else{
        return true;
    }
}

// this function is used for validate optional inputs of letters and nubers (allowed space)

function isAlphanumericAllowEmpty_RemoveSpace(str) {
    var str = validator.blacklist(str, " ");
    if (!validator.isEmpty(str)){
        if (validator.isAlphanumeric(str)){
            return true;
        }else{
            return false;
        }
    }else{
        return true;
    }
}

// this function is used for validate optional inputs of numbers

function isNumericAllowEmpty(str) {
    if (!validator.isEmpty(str)){
        if (validator.isNumeric(str)){
            return true;
        }else{
            return false;
        }
    }else{
        return true;
    }
}

function formValidation(){

    // assign form variables with values

    firstName = $('#firstName').val();
    lastName = $('#lastName').val();
    gender = $('#gender').val();
    birth = $('#birth').val();
    country = $('#country').val();
    state = $('#state').val();
    city = $('#city').val();
    suburb = $('#suburb').val();
    addr1 = $('#addr1').val();
    addr2 = $('#addr2').val();
    email = $('#email').val();
    phoneNumber = $('#phoneNumber').val();
    desiredPosition = $('#desiredPosition').val();
    desiredSalary = $('#desiredSalary').val();
    startWork = $('#startWork').val();
    endWork = $('#endWork').val();
    workPlace = $('#workPlace').val();
    workPosition = $('#workPosition').val();
    workAchievement = $('#workAchievement').val();
    eduInstitution = $('#eduInstitution').val();
    eduDepartment = $('#eduDepartment').val();
    eduSpecialization = $('#eduSpecialization').val();
    eduGraduation = $('#eduGraduation').val();

    // check if all compulsory fields are valid?

    if (isAlpha_RemoveSpace(firstName) && isAlpha_RemoveSpace(lastName) && validator.isAlpha(gender) && validator.isISO8601(birth) && isAlpha_RemoveSpace(country)){

        // START VALIDATION CHECK FOR NON-COMPOLSORY FIELDS
        // if a numeric field is not empty, then check it if it is numeric?

        if (!isNumericAllowEmpty(phoneNumber)){
            return false;
        }
        if (!isNumericAllowEmpty(desiredSalary)){
            return false;
        }
        if (!isNumericAllowEmpty(startWork)){
            return false;
        }
        if (!isNumericAllowEmpty(endWork)){
            return false;
        }
        if (!isNumericAllowEmpty(eduGraduation)){
            return false;
        }
        if (!isNumericAllowEmpty(phoneNumber)){
            return false;
        }

        // if email field is not empty, then check it if it is a valid email address?

        if (!validator.isEmpty(email) && !validator.isEmail(email)){
            return false;
        }

        // then check other optional fields

        if (!isAlphaAllowEmpty_RemoveSpace(state)){
            return false;
        }
        if (!isAlphaAllowEmpty_RemoveSpace(city)){
            return false;
        }
        if (!isAlphaAllowEmpty_RemoveSpace(suburb)){
            return false;
        }
        if (!isAlphanumericAllowEmpty_RemoveSpace(addr1)){
            return false;
        }
        if (!isAlphanumericAllowEmpty_RemoveSpace(addr2)){
            return false;
        }
        if (!isAlphaAllowEmpty_RemoveSpace(desiredPosition)){
            return false;
        }
        if (!isAlphaAllowEmpty_RemoveSpace(workPlace)){
            return false;
        }
        if (!isAlphaAllowEmpty_RemoveSpace(workPosition)){
            return false;
        }
        if (!isAlphaAllowEmpty_RemoveSpace(eduInstitution)){
            return false;
        }
        if (!isAlphaAllowEmpty_RemoveSpace(eduDepartment)){
            return false;
        }
        if (!isAlphaAllowEmpty_RemoveSpace(eduSpecialization)){
            return false;
        }

        // return true if all checks passed

        return true;

    }else{

        // return false if one or more compulsory fields are empty of vaild

        return false;
    }
}

/* RESUME FORM VALIDATION JAVASCRIPT START - used for both create-resume and edit resume pages */