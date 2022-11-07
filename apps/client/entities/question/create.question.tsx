
import { 
  Create,
  SimpleForm,
  
TextInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// ------------------------------------------------

export default function CreateQuestion(props: any) {
    return (
      <Create>
        <SimpleForm redirect="list">
          <TextInput source="question" variant="outlined"   />
<ReferenceInput label="interest" source="interestid" reference="interest">
        <AutocompleteInput variant="outlined" /* optionText="interest"   */ />
      </ReferenceInput>
    

        </SimpleForm>
      </Create>
    );
  }
