//VALIDATION FOR NAME
function validate() {

    var name = document.getElementsByClassName("name");
    var course = document.getElementById("course");
    var detail = document.getElementsByClassName("detail");
    var dob = document.getElementsByClassName("dob");
    var address = document.getElementsByClassName("address");
    var marks = document.getElementsByClassName("marks");
    if (name[0].value == "" || name[1].value == "" || name[2].value == "") {
        alert("Invalid Input");
        return false;
    }
    if (dob[0].value == "" || dob[1].value == "" || dob[2].value == "") {
        alert("dob worng");
        return false;
    }
    if(address[0].value==""||address[1].value==""||address[2].value==""){
        alert("plz enter valid address");
            return false;
    }
    if(marks[0].value=="" || marks[1].value==""){
        alert("plz enter your marks");
        return false;
    }
   
   
        if (detail[0].value == " " || detail[1].value.length > 10 || detail[2].value.length < 10) {
            alert("plz enter valid details");
            return false;
        }
    
    if (course.value == "") {
        alert("plz enter your current pursuing course");
        return false;
    }
}

