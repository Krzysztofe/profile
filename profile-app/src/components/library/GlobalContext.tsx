export {}

// import React, {createContext, useState, FC, ChangeEvent} from 'react';
// import {addDoc, collection} from "firebase/firestore";
// import {auth, firestore} from "../../libraries/FireBaseConfig";
// import {useAuthState} from "react-firebase-hooks/auth";
//
// interface Props {
//     children: React.ReactNode
// }
//
// export interface IInputsValue {
//     selectStuff: string;
//     selectBags: string | number;
//     selectLocalisation: string | number;
//     dzieciom: boolean;
//     matkom: boolean;
//     bezdomnym: boolean;
//     niepelnosprawnym: boolean;
//     starszym: boolean;
//     organisationName: string;
//     street: string;
//     city: string;
//     postCode: string;
//     phone: string;
//     date: string;
//     time: string;
//     note: string;
//     uid: string
// }
//
// export type ContextType = {
//     inputsValue: IInputsValue
//     setInputsValue: React.Dispatch<React.SetStateAction<IInputsValue>>
//     // counter: number
//     // handleIncrease: () => void
//     // handleDecrease:() => void
//     handleChange: (e:ChangeEvent<HTMLInputElement>) => void
//     createSummary:() => void
// }
//
//
// export const GlobalContext = createContext<ContextType>({} as ContextType)
//
// const GlobalContextProv: FC<Props> = ({children}) => {
//
//     const [inputsValue, setInputsValue] =
//         useState <IInputsValue> ({
//             selectStuff: "", selectBags: "-- Wybierz --",
//             selectLocalisation: "-- Wybierz --", dzieciom: false,
//             matkom: false, bezdomnym: false,
//             niepelnosprawnym: false, starszym: false,
//             organisationName: "", street: "",
//             city: "", postCode: "", phone: "",
//             date: "", time: "", note: "", uid: ""
//         })
//
//     const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
//         const value = e.target.type === "checkbox"
//             ?
//             e.target.checked
//             :
//             e.target.value
//         setInputsValue({
//             ...inputsValue,
//             [e.target.name]: value
//         })
//     }

// const [counter, setCounter] = useState <number> (1)
//
// const handleIncrease = (): void => {
//     if (counter > 0 && counter < 6)
//         setCounter(prevState => prevState + 1)
// }
//
// const handleDecrease = (): void => {
//     if (counter > -1 && counter < 6)
//         setCounter(prevState => prevState - 1)
// }

//     const [user, loading, error] = useAuthState(auth);
//     const summaryReference = collection(firestore, 'summary')
//
//     const createSummary = async (): Promise <void> => {
//         await addDoc(summaryReference, {
//             selectStuff: inputsValue.selectStuff,
//             selectBags: inputsValue.selectBags,
//             localisation: inputsValue.selectLocalisation,
//             dzieciom: inputsValue.dzieciom,
//             matkom: inputsValue.matkom,
//             bezdomnym: inputsValue.bezdomnym,
//             niepelnosprawnym: inputsValue.niepelnosprawnym,
//             starszym: inputsValue.starszym,
//             organisationName: inputsValue.organisationName,
//             street: inputsValue.street,
//             city: inputsValue.city,
//             postCode: inputsValue.postCode,
//             phone: inputsValue.phone,
//             date: inputsValue.date,
//             time: inputsValue.time,
//             note: inputsValue.note,
//             uid: user?.uid
//         })
//     }
//
//     return (
//         <GlobalContext.Provider value={{
//             inputsValue,
//             setInputsValue,
//             // counter,
//             handleChange,
//             // handleIncrease,
//             // handleDecrease,
//             createSummary}}>
//             {children}
//         </GlobalContext.Provider>
//     );
// };
//
// export default GlobalContextProv;