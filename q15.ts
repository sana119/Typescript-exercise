let guest_list :string[] = ['Shagufta','Tariq','azim','sadia'];

for(let i=0; i<guest_list.length; i++){
    console.log('Dear . ' + guest_list[i] + ',\n\nit is our pleasure to invite you in our party . \n\nThank you!\n\n')
}

let absent_Guest :string = 'Sadia' ;

let new_Guest :string = 'Fatima' ;

guest_list[0] = new_Guest ;

for(let i=0; i<guest_list.length; i++){
    console.log('Dear . ' + guest_list[i] + ',\n\nit is our pleasure to invite you in our party . \n\nThank you!\n\n')
}

console.log(`Mrs. ${absent_Guest} is not coming to the party. `) 