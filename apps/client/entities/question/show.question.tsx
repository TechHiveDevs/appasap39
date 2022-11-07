
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
ReferenceField,
} from "react-admin";

// ------------------------------------------------

export default function ShowQuestion(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
<TextField source="question" />
<ReferenceField source="interestid" reference="interest" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}