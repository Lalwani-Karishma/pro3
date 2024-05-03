import logo from './logo.svg';
import './App.css';
import About from './Page/About';
import Service from './Service';
import Testimonails from './Testimonails';
import Charges from './Charges';
import Appoinment from './Appoinment';
import Contact from './Contact';
import Home from './Home';


function App() {

  return (

    <>

  <Home name="I'm"
   para="Psychiatrists are M.D.s because they possess a medical degree. This enables them to prescribe medications for mental health conditions, as well as administer psychotherapy."></Home>  

  <About nbr="000-123-4567 or 141-568-2646" 
  pro="Borderline personality disorder is one of the most painful mental illnesses since individuals struggling with this disorder are constantly trying to cope with volatile and overwhelming emotions."
  att="Heart Attacks"
  mig="Migraine"
  heart="People experiencing depression, anxiety, stress, and even PTSD over a long period of time may experience certain physiologic effects on the body"
  raine="Psychotherapy often helps, either by reducing the direct symptoms of migraine or by helping the patient manage their lives better in the face of those symptoms."
  rec="Recreation therapy, use of recreation by qualified professionals (recreation therapists) to promote independent functioning and to enhance the health and well-being of people with illnesses and disabling conditions."></About>

  <Service lorem="Followings are super specialist specialization after MD psychiatry: Addiction Psychiatry. Clinical and Adolescent Psychiatry."
  abc="Formalising a hypotheses, creating research methodologies etc."
  bet="Better use of the limited time that we have is a better strategy."></Service>
    
  <Testimonails namechange="John Wink"
  exp="The United States is a hub for psychiatric research and offers a vast array of mental health treatments. With some of the world's leading mental health professionals and institutions, the U.S. is a key destination for those seeking high-quality mental health care."></Testimonails>

  <Charges min="45 min" time="10:30AM-7:00PM"
  pak=" It not only prepares graduates for impactful clinical practice but also empowers them to contribute to research, education, and community mental health initiatives."
  per="Teleheatlh services."
  onl="Online consultation."
  com="Effective communication skills."
  non="Non-defensive communication."
  con="Conflict-resolution techniques."
  hard="Make non-violence a hard rule."
  fun="Have fun-filled group activities."
  right="Compile the right group."
  doc="A psychologist specializes in the study of human thought and behavior, including the impact of development, environment and social interaction on what we think, feel and do, said Garrin."
  scope="The scope of an MD in Psychiatry from GS Medical College transcends the traditional boundaries of medical education. It not only prepares graduates for impactful clinical practice but also empowers them to contribute to research, education, and community mental health initiatives."></Charges> 

  <Appoinment input="SEND THE MESSAGE"></Appoinment>
  
  <Contact c="120 Apple, New York, USA" num="123-456-78910"></Contact>
  
    </>

     
  );
}

export default App;
