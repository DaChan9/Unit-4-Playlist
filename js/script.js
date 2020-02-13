 var song = {songlist:["Rude", "sunflowers", "Put it all on Me","Small Talk","Falling"]}
let artist ={artistlist:["Post Malone", "Bruno Mars", "Michael Jackson"]}
let length ={lengthlist:["3 minutes", "6 minutes", "5 minutes"]}
let image ={imagelist:["", "", "",]}
let link ={linklist:["https://www.youtube.com/watch?v=PIh2xe4jnpk", "https://www.youtube.com/watch?v=PIh2xe4jnpk", "https://www.youtube.com/watch?v=OPf0YbXqDm0"]}
$( "#submit" ).click(function() {
   let songvalue = $("#songlist").val();
   song.songlist.push($("#songlist").val());
   console.log(submit);
   //console.log("Hello");
  $(".songList").append("<li>"+ songvalue +"</li>")
});
$("#submit").click(function() {
  let artistvalue = $("#artistlist").val();
  artist.artistlist.push($("#artistlist").val());
  console.log(submit);
  $(".artist").append("<li>"+ artistvalue +"</li>")
});
$("#submit").click(function() {
  let lengthvalue = $("#lengthlist").val();
  length.lengthlist.push($("#lengthlist").val());
  console.log(submit);
  $(".length").append("<li>"+ lengthvalue +"</li>")
});
$("#submit").click(function() {
  let imagevalue = $("#imagelist").val();
  image.imagelist.push($("#imagelist").val());
  console.log(submit);
  $(".image").append("<li>"+ imagevalue+"</li>")
});
$("#submit").click(function() {
  let linkvalue = $("#linklist").val();
  link.linklist.push($("#linklist").val());
  console.log(submit);
  $(".link").append("<li>"+ linkvalue +"</li>")
});
song.songlist.forEach(function(song) {
  $(".songList").append("<li>"+ song +"</li>")

});
artist.artistlist.forEach(function(artist) {
  $(".artist").append("<li>"+ artist +"</li>")
});
length.lengthlist.forEach(function(length) {
  $(".length").append("<li>"+ length +"</li>")
});
image.imagelist.forEach(function(image) {
  $(".image").append("<li>"+ image +"</li>")
});
link.linklist.forEach(function(link) {
  $(".link").append("<li>"+ link +"</li>")
});