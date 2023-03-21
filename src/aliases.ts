type StringOrNum = string | number;
type ObjectWithName = {name: string, uid: StringOrNum};

const submit = (user: ObjectWithName) => {
    console.log(`${user.name} hello!`);
}
