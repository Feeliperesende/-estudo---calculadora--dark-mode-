
import React from 'react';
import {
  
  StyleSheet,
  
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import {useState} from 'react';
import Icon  from 'react-native-vector-icons/Entypo';

export default function App() {  
  const [darkMode , setDdarkMode] = useState(false)
  const buttons = ['AC', 'DEL', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 3, 2, 1, '+', 0, '.', '+/-', '=']  
  
  function calculator(){
    const splitNumbers = currentNumber.split(' ')
    const fistNumber = parseFloat(splitNumbers[0])
    const lastNumber = parseFloat(splitNumbers[2])
    const operator = splitNumbers[1]
  
    switch(operator){
      case '+':
        setCurrentNumber((fistNumber + lastNumber).toString())
        return
      case '-': 
        setCurrentNumber((fistNumber - lastNumber).toString())
        return
      case '*':
        setCurrentNumber((fistNumber * lastNumber).toString())
        return
      case '/': 
        setCurrentNumber((fistNumber / lastNumber).toString())
        return
    }
  }

const [currentNumber,setCurrentNumber]= useState (" ")
const [lastNumber, setLastNumber ] = useState (" ")



  function handleInput (buttonPressed)
  {console.log (buttonPressed)
  if(  buttonPressed ===  '+'  | buttonPressed === '-'  | buttonPressed === '/'  | buttonPressed === '*' ){
    setCurrentNumber (currentNumber + " " + buttonPressed + " ")
    return
  }
  switch (buttonPressed){
    case 'DEL':
setCurrentNumber(currentNumber.substring(0, (currentNumber.lenght -1)))
      return
      case 'AC' :
        setLastNumber("")
        setCurrentNumber ("")
        return
        case '=' :
        setLastNumber(currentNumber + '=')
        calculator ()
        return 
        case '+/-' :
          return 
  }
setCurrentNumber (currentNumber + buttonPressed )}


    const styles =StyleSheet.create({
 
  result:{
    backgroundColor:darkMode ?"#282f3b" : "#f5f5f5",
    width: '100%',
    minHeight:267,
    alignItems:'flex-end',
    justifyContent:'flex-end',
    

  },
  resultText:{
    color: darkMode ?  "#F5F5F5": "#282F38"  ,
    margin:10,
    fontSize:40,
  },
  themeButton:{
    backgroundColor:darkMode ? "#7b8084" :"#e5e5e5",
    alignItems:'center',
    justifyContent:'center',
    width:50,
    height:50,
    borderRadius:25,
    alignSelf:'flex-start',
    bottom:10,
  margin:10 },
  button:{
borderColor:darkMode ? '#3f4d5b' :'#e5e5e5',
minWidth: 90,
minHeight: 90,
flex:2,
alignItems:'center',
justifyContent:'center',
borderWidth:1,
  },
  buttons:{
flexDirection:'row',
flexWrap:'wrap',
  },
  textButton:{
    color: darkMode ? "#b5b7bb" :"#7c7c7c",
    fontSize:20,
  },
  historytext:{
color: darkMode ?  "#B5B7BB": "#7c7c7c" ,
fontSize:20,
alignSelf:'flex-end',
marginRight:10,

  },
});

return(
  <View >
  <View style={styles.result} >  
  <TouchableOpacity style={styles.themeButton}>
  <Icon  name = {darkMode ? "light-up" : "moon"} size ={24} color = { darkMode ? "white" : "black"}  onPress={() => darkMode? setDdarkMode(false) : setDdarkMode(true) } />

  </TouchableOpacity>
<Text style={styles.historytext}>{lastNumber}</Text>

  <Text style={styles.resultText}>{currentNumber} </Text>
  </View>
  <View style={styles.buttons}>

{buttons.map ((button) => button === '='? <TouchableOpacity  onPress={() => handleInput(button)}  key ={button}style={[styles.button , {backgroundColor:'#9DBC7B'}]}>
<Text style= {[styles.textButton, {color:"white" ,fontSize:28 }]}>{button}</Text>
</TouchableOpacity> : 
<TouchableOpacity onPress={() => handleInput(button)} key ={button} style={[styles.button , {backgroundColor : typeof(button) === 'number' ? darkMode === true ?  '#303946' : '#fff' :
 darkMode === true ? '#414853' : '#ededed' }   ] }>

<Text style={styles.textButton}>{button}</Text>
</TouchableOpacity> )}

  </View>

  </View>
);}
