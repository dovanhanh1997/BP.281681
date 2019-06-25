const Jan = 1;
const Feb = 2;
const Mar = 3;
const Apr = 4;
const May = 5;
const Jun = 6;
const July = 7;
const Aug = 8;
const Sep = 9;
const Oct = 10;
const Nov = 11;
const Dec = 12;



function checkDayOfMonth() {
    let view = document.getElementById('view');
    console.log(view.value);
    switch (parseInt(view.value)) {
        case Jan:
        case Mar:
        case May:
        case July:
        case Aug:
        case Oct:
        case Dec:
            view.value = "Tháng " + view.value  +" có 31 ngày";
            break;
        case Apr:
        case Jun:
        case Sep:
        case Nov:
            view.value = "Tháng" + view.value + "có 30 ngày";
            break;
        case Feb:
            view.value = "Tháng" + view.value + "có 28 hoặc 29 ngày"
            break;
    }
}