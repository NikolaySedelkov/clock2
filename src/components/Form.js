import { useState,useRef } from "react";

function Form({func}){
    const formRef = useRef();
    const [wrong, setWrong] = useState(false);
    const [value, setValue] = useState({
        name: "",
        timeZone: "GMT"
    })
    const patternGMT = evt => {
        let _value = evt.target.value;
        if(_value.length < 3){
            _value = "GMT";
        }else if(_value.length > 6){
            _value = _value.slice(0, 6);
        }
        setValue({...value, timeZone: _value});
        if(/GMT[-+]\d{1,2}$/.test(_value)){
            setWrong(false);
        }else{
            setWrong(true);
        }

    }

    const setName = evt => {
        setValue({...value, name: evt.target.value});
    }

    const formSubmit = () => {
        if(!wrong){
            func(value);
            formRef.current.reset();
        }
    }

    return (
        <form id = "form-locate" ref={formRef}>
            <div>
                <label htmlFor="title-locate">Название</label><br/>
                <input id="title-locate" type="text" onChange={setName}/>
            </div>

            <div>
                <label htmlFor="time-locate">Временная зона(<i>формат: GMT +/- dd</i>)</label><br/>
                <input id="time-locate" type="text" value={value.timeZone} onChange={patternGMT} className={wrong?"error":null}/>
            </div>

            <button type="button" onClick={formSubmit}>Добавить</button>
        </form>
    )
}

export default Form;