//  A callback is a function that is to be executed after another function has finished executing
// — hence the name ‘call back’.

function doHomework(subject, callback) {
    console.log(`Starting my ${subject} homework.`);
    callback();
  }
  function Finished(){
          console.log('Finished my homework');
  }
  doHomework('Code', Finished);