## README - Fil för Laboraton 2 i Webbutveckling III vid Mittuniversitetet
### Av: Björn Olsson, 2018-09-17
---

### Syfte med automatisering

Syftet med automatisering i webbutveckling har flera fördelar. Desto mer avancerad webbutveckling  som hålls på med krävs fler och fler verktyg och användande av flera filer  samtidigt. Detta gör att en lite förändring i en fil innebär att du måste spara  
om ändringarna för att sedan behöva ladda om din webbläsare (exempelvis).  
Detta moment är extra ansträngande när man håller på med CSS eftersom du gör många   sidomladdningar för att se så att allt blir rätt.

Automatiseringen hjälper dig att exempelvis konkatenera och minifiera Javascript-  
och CSS-filer. Detta för att spara plats och även för att filerna ska ta mindre plats.  
Automatiseringen innebär även att sparningar görs i utvecklingsmiljön och sedan appliceras  
direkt i webbläsaren utan omladdning. Det går att göra antingen genom plugin i utvecklarens  
text-editor eller genom ett LiveReload-plugin till Google Chrome.  

---

### Paket och verktyg som använts

De paket och verktyg som använts är:

* Visual Studio Code (VSC)
* Live server - plugin till VSC
* Livereload, vilket inte fungerade alls därav att Live Server användes istället
* gulp (om det nu räknas som ett paket)
* gulp-uglify
* gulp-watch
* gulp-concat
* Git och Github  

---

### Systembeskrivning

Eftersom uppgiften går ut på att automatisera saker som:

	* Sammanslagning och minifiering av CSS-filer
	* Sammanslagning och minifiering av JS-filer
	* Automatisk omladdning av webbläsaren
	* Uppdatering av HTML-filer

Så behövs det inte göras speciellt mycket för att systemet ska fungera.  
Först måste Visual Studio installeras tillsammans med Live Server - pluginet.  
Efter det öppnas kommandoprompten och man navigerar till den mapp där projektet lagrats,  
"gulp" skrivs in så att alla tasks aktiveras.  
Ponera att "src"-katalogen har sina html/css/js-filer i sig så kommer dessa nu minifieras, konkateneras och kopieras över till "pub"-mappen.
Varje gång en förändring sparas så kommer watcher-tasken känna av detta och skicka förändringen  
via LiveServer som uppdaterar webbläsarfönstret. 

###Extra tillägg

Inga extra tillägg har lagts till, LiveReload testades läggas till men jag fick inte det  
att fungera som det skulle.

---