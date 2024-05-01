import { FormEvent, useEffect, useState } from "react";
import AdminSidebar from "../../../components/adminComponents/adminSidebar";

const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const allNumbers = "1234567890";
const allSymbols = "!@#$%^&*()_+";

const Coupon = () =>
{
    const [size,setSize]=useState<number>(8)
    const [prefix,setPrefix]=useState<string>("")
    const [includeNumbers,setIncludeNumbers]=useState<boolean>(false)
    const [includeCharacters,setIncludeCharacters]=useState<boolean>(false)
    const [includeSymbol,setIncludeSymbol]=useState<boolean>(false)
    const [isCopied,setIsCopied]=useState<boolean>(false)
    const [coupon, setCoupon] = useState<string>( "" )
    
    const copyText = async(coupon:string) =>
    {
        await window.navigator.clipboard.writeText( coupon )
        setIsCopied( true )     
    }
   
            
    const submitHandler = (e:FormEvent<HTMLFormElement>) =>
    {
        e.preventDefault();
        if (!includeCharacters && !includeNumbers && !includeSymbol)
            return alert( "Please select atleast one checkbox" )
        
        let result: string = prefix || ""  
        const loopLength: number = size - result.length;

        for ( let i = 0; i < loopLength; i++ )
        {
            let entireString: string = "";
            if ( includeCharacters ) entireString += allLetters;//if characters is checked ,then include all alphabets
            if ( includeNumbers ) entireString += allNumbers;
            if ( includeSymbol ) entireString += allSymbols;

            const randomNum: number = ~~( Math.random() * entireString.length )
            result+= entireString[randomNum];
        }
            setCoupon( result)
        
    }

    useEffect( () =>
    {
        setIsCopied(false)
    }, [coupon] )
    
  return (
    <div className="admin-container">
      <AdminSidebar />
          <main className="dashboard-app-container">
              <h1>Coupon</h1>
              <section>
                  <form className="coupon-form" onSubmit={submitHandler}>
                      <input type="text"
                          placeholder="Text to include"
                          value={ prefix }
                          onChange={ e => setPrefix( e.target.value ) }
                          maxLength={ size } />
                      <input type="number"
                          placeholder="Coupon Length"
                          value={ size }
                          onChange={ e => setSize(Number( e.target.value) ) }
                          min={8}
                          maxLength={ 25 } />
                      <fieldset>
                          <legend>Include</legend>
                          <input type="checkbox"
                          checked={ includeNumbers }
                          onChange={ () => setIncludeNumbers(prev => !prev ) }//since this is a checkbox we are setting to boolean value
                          />
                          <span>Numbers</span>
                          <input type="checkbox"
                          checked={ includeCharacters }
                          onChange={ () => setIncludeCharacters(prev => !prev ) }
                          />
                          <span>Characters</span>
                          <input type="checkbox"
                          checked={ includeSymbol }
                          onChange={ () => setIncludeSymbol(prev => !prev ) }
                          />
                          <span>Symbols</span>

                          
                      </fieldset>
                      <button type="submit">Generate</button>
                  </form>
                  {
                //   if coupon exists then show code tag with coupon number 
                      coupon && <code>{ coupon }
                          <span onClick={() => copyText(coupon)}>{ isCopied ? "Copied" : "Copy" }</span></code>
                  }
              </section>
              </main >
              </div>
  )
}

export default Coupon