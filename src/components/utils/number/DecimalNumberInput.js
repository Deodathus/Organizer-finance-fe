import {Input} from "@chakra-ui/react";

export default function DecimalNumberInput(props) {
    const updateValueFunction = props.updateValueFunction;
    const value = props.value;
    const name = props.name;

    function parseToFloat(value) {
        let result = value;

        if (result !== '') {
            const stringWithDot = result.replace(/,/g, '.');
            const parsedValue = parseFloat(stringWithDot).toFixed(2);

            if (!isNaN(parsedValue)) {
                updateValueFunction(parsedValue);
            }
        }
    }

    function onChangeTrigger(value) {
        updateValueFunction(value);
    }

    return (
        <>
            <Input
                value={value}
                name={name}
                onBlur={(event) => parseToFloat(event.target.value)}
                onChange={(event) => onChangeTrigger(event.target.value)}
            />
        </>
    );
}
