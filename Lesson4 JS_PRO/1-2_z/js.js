let text =
 `'For breakfast English people often have porridge with milk and sugar. They don’t eat much bread.'
 'They usually have toasts. They enjoy drinking strong tea with milk.'
 'At one o'clock English people have lunch. They usually have lunch in a restaurant or a cafe.'`

//Задание 1
 let Text = text.replace(/\'/g, "\"");       1
 console.log(Text);

 //Задание 2
 
 let Text1= text.replace(/\B\'/g, "\"");   
 console.log(Text1);
