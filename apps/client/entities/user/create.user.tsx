
import { 
  Create,
  SimpleForm,
  
required,
TextInput,
AutocompleteInput,
NumberInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// ------------------------------------------------

export default function CreateUser(props: any) {
    return (
      <Create>
        <SimpleForm redirect="list">
          <TextInput source="name" variant="outlined" validate={required()}  />
<TextInput source="email" variant="outlined" validate={required()}  />
<AutocompleteInput variant="outlined" source="gender" choices={[
{ id: "Male", name: "Male" },
{ id: "Female", name: "Female" },
]}  />
<NumberInput source="age" variant="outlined"  />
<ReferenceInput label="interest" source="interestid" reference="interest">
        <AutocompleteInput variant="outlined" /* optionText="interest"   */ />
      </ReferenceInput>
    

        </SimpleForm>
      </Create>
    );
  }
