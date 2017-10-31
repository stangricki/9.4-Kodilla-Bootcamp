// Nie rozumiem po co tworzyc pętlę w petli (tak jak w instrukcji do zadania) 
// skoro można to zrobic prosciej

function drawtree(NumberOfLines) {
	for (var i = "*"; i.length < NumberOfLines; i += "*")
    console.log(i);}

drawtree(20)