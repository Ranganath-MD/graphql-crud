import Contact from "../models/contact_model";

export const allContacts = async() => {
  return Contact.find()
    .then((contacts: any) => {
        return contacts.map((c:any)=> {
          return { ...c._doc}
        });
    })
    .catch((err) => {
        throw err
    });
};

export const createContact = (args: any) => {
  const obj = {
    name: args.inputContact.name
  };
  const contact: any = new Contact(obj);
  return contact.save()
    .then((result: any) => {
      return {...result._doc}
    })
    .catch((err: any) => {
      console.log(err);
      throw new Error;
    });
};

export const updateContact = async({ _id, input }: any) => {
  return Contact.findByIdAndUpdate(_id,  { $set: input }, { new: true, runValidators: true })
  .then((result: any) => {
    return {...result._doc}
  })
  .catch((err: any)=> {
    console.log(err)
  })
};

export const deleteContact = async({ _id }: any) => {
  return Contact.findByIdAndDelete(_id)
  .then((result: any) => {
    return {...result._doc}
  })
  .catch(err => {
    console.log(err)
  })
};