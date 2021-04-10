/
 * Kode vanilla javascript untuk menambahkan value
 * pada elemen html
 */
document.getElementById('nama').innerHTML = 'Hasna';

/
 * kode jquery untuk menmabhakan value
 * pada elemen html
 */
$('#nim').html('20190140056');

/**
 * jquery menggunakan selector sama seperti css
 * .untuk class
 * # untuk id
 * kita dapat menuliskan tag html bila ingin memilih berdasarkan tag
 * misal : <button></button maka tinggal tulis button
 * dalam kode berikut,kita akan menampilkan kode console.log saat document ready
 */
$(function() {
    console.log("hello");
});

//kode jquery untuk menyembunyikan elemen
$("#hide").on("click", function() {
    $("#nama").hide();
});

//kode jquery untuk menampilkan kembali elemen
$("#show").on("click", function() {
    $("#nama").show();
});

$("#Toggle").on("click", function() {
    $("#nama").toggle();
});

//kode jquery untuk fade in elemen html
$("#fadeIn").on("click", function() {
    $("#tanggal").fadeIn();
});

//kode jquery untuk fade in elemen html
$("#fadeOut").on("click", function() {
    $("#tanggal").fadeOut();
});

//
$("#fadeToggle").on("click", function() {
    $("#tanggal").fadeToggle();
});

//kode jquery untuk slide up elemen html
$("#slideUp").on("click", function() {
    $("#img").slideUp();
});

//kode jquery untuk slide down elemen html
$("#slideDown").on("click", function() {
    $("#img").slideDown();
});

//kode jquery untuk slide toggle elemen html
$("#slideTogle").on("click", function() {
    $("#img").slideToggle();
});