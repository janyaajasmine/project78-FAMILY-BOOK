var images = 
[
   "grand father.ing.jpg",
    "grand mother img.jpg" , 
    "aunty ing.jpg ", 
    "cousin brother and sister.jpg" ,
     "uncle.jpg" , 
     "mother.jpg"
];
var names =
[
    "genesh",
    "saraswathi bai",
    "vinutha.kp",
    "jatin balaji,moulya",
    "nagaraj",
    "bhagyalakshmi.ug"

];

var i=0;
function update()
{
    i++;
    var numbers_of_family_members_in_array=6
    if(i > numbers_of_family_members_in_array)
    {
        i=0;

    }
    var updatedImage = images[i];
    var updatedNames = names[i] ;
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedNames;
}
