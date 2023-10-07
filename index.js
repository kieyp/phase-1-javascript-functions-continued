// code your solution here

function saturdayFun(activity='roller-skate')
{
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity='go to the office')

{

  return`This Monday, I will ${activity}.`
}

(function(basenumber){

  return basenumber +3 ;
})


function wrapAdjective(string='*')

{
  return function inner(parametre='special')
  {
    return `You are ${string}${parametre}${string}!`
  }
}