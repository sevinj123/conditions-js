// 1.Verilmiş 3 rəqəmli ədədin bütün rəqəmlərinin bir-birindən fərqli olub olmadığını tapan alqoritmi yazın(Məsələn: input 223, output "bütün rəqəmlər bərabər deyil " (false) ).

// var num=prompt('reqemi daxil edin');
// if (num>99 && num<1000) {
// var teklik=num%10
// var onluq=((num-teklik)/10)%10
// var num2=onluq*10+teklik
// var yuzluk=(num-num2)/100

// if(teklik==onluq && onluq==yuzluk){
//     alert("ededlerden bir-birine beraberdir")
// }
// else{
//     alert("Butun reqemler beraber deyil")
// }

//     }



    
//  2.İstifadəçi char tipindən dəyər daxil edib (input) char 'a' hərfinə bərabərdirsə ekrana "Azərbaycan dili seçildi" yazısı gəlsin(output), 'r' hərfinə bərabərdirsə "Rus dili seçildi" yazısı gəlsin (output). Digər bütün hallarda  "Yanlış sorğu" yazısı gəlsin(output).

var azerbaycanrus = prompt ("texti daxil  edin")
switch (azerbaycanrus)
{
    case "a":
        alert("azerbaycan dili");
        break;
        case "r":
            alert("rus dili");
            break;

    default:
        alert("wrong input");
        break;
     }







