
import { 
  Edit,
  SimpleForm,
  
TextInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditQuestion(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <TextInput source="question" variant="outlined"   />
<ReferenceInput label="interest" source="interestid" reference="interest">
        <AutocompleteInput variant="outlined" /* optionText="interest"   */ />
      </ReferenceInput>
    

      </SimpleForm>
    </Edit>
  );
}