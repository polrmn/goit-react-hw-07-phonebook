import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es';
import { fetchContacts } from 'redux/operations';
import AddNewContact from './AddNewContact/AddNewContact';
import ContactsList from "./ContactsList/ContactsList";
import FilterContacts from "./FilterContacts/FilterContacts";
import { Title } from "./App.styled";
import { getError, getIsLoading } from 'redux/selectors';


const App = () => { 
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);


  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);
  
  return (
    <>
      <AddNewContact />
      <Title>Contacts</Title>
      <FilterContacts />
      {isLoading && !error ? <b>Request in progress...</b> : <ContactsList />}
    </>
  );
}

export default App;
