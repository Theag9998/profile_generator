const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  
	
	rl.question('What is your favourite activity? ', (activity) => {
		

		rl.question('What music do you like to listen while doing that? ', (music) => {
			
		
			rl.question('What meal of the day is your favourite? ', (meal) => {
				

				rl.question('What is your favourite thing to eat for that meal? ', (eat) => {
					

					rl.question('Which sport is your favourite? ', (sport) => {
						

						rl.question('What is your superpower? ', (superpower) => {
							console.log(`${name} loves listening to ${music} while ${activity}, devouring ${eat} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`);
							rl.close();
						})
						
					})
					
				})
			
			})
	
	
		})
		
	})
});







