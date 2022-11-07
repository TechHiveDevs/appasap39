
import show from "./show.question";
import create from "./create.question";
import edit from "./edit.question";
import list from "./list.question";

export default { 
  name: "question",
  label: "question",
  hide: false,
  create,
  edit,
  list,
  show,
}