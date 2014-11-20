#!/usr/bin/env node
var program = require('commander'),
    clip = require('copy-paste');

program
  .version('0.0.1')
  .option('-z, --zombie', 'Zombie')
  .option('-g, --gangster', 'Gangster')
  .parse(process.argv);


if (program.zombie){
  console.log('Zombie lipsum copied to clipboard');
  clip.copy('Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. ');
} 
else if(program.gangster){
  console.log('Gangster lipsum copied to clipboard');
  clip.copy('Lorizzle ipsum dolor sit fo, consectetuer adipiscing sheezy. Check out this sapien velizzle, fizzle volutpat, suscipizzle quis, shizzlin dizzle vizzle, boofron. Pellentesque eget bow wow wow. Sed erizzle.');
}
else{
  console.log('Boring old lorem ipsum copied to clipboard');
  clip.copy('Lorem ipsum dolor sit amet, elit purus eros id vitae sed blandit. Risus dui dui, vel vehicula erat sem, aliquam veniam leo. Suspendisse mauris dolor vestibulum enim feugiat, leo mauris consequat eu eget, adipiscing vestibulum et tellus, nec laoreet non metus eget.');
}

