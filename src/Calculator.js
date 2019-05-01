import React, { Component } from 'react';

const Header = () => <h1 style={css.header}>Calculator</h1>

class Calculator extends Component {
    state = {
        buttons: [
            { label: "AC", value: "ac", id: "acBtn", type: "reset" },
            { label: "CE", value: "ce", id: "ceBtn", type: "cancel" },
            { label: "%", value: "%", id: "percentageBtn", type: "percent" },
            { label: "÷", value: "/", id: "divideBtn", type: "action" },
            { label: "7", value: "7", id: "sevenBtn", type: "number" },
            { label: "8", value: "8", id: "eightBtn", type: "number" },
            { label: "9", value: "9", id: "nineBtn", type: "number" },
            { label: "x", value: "*", id: "productBtn", type: "action" },
            { label: "4", value: "4", id: "fourBtn", type: "number" },
            { label: "5", value: "5", id: "fiveBtn", type: "number" },
            { label: "6", value: "6", id: "sixBtn", type: "number" },
            { label: "-", value: "-", id: "substractBtn", type: "action" },
            { label: "1", value: "1", id: "oneBtn", type: "number" },
            { label: "2", value: "2", id: "twoBtn", type: "number" },
            { label: "3", value: "3", id: "threeBtn", type: "number" },
            { label: "+", value: "+", id: "addBtn", type: "action" },
            // { label: "N", value: "undefined", id: "undefinedBtn", type: "undefined" },
            { label: "±", value: "±", id: "plusMinusBtn", type: "toggleNegative" },
            { label: "0", value: "0", id: "zeroBtn", type: "number" },
            { label: ".", value: ".", id: "decimalBtn", type: "number" },
            { label: "=", value: "=", id: "equalBtn", type: "display" }
        ],
        entry: {
            total: undefined,
            action: undefined,
            currentValue: undefined,
            error: ""
        }
    };

    filterFloat = value => {
        if (/^(-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/.test(value))
            return Number(value);
        return NaN;
    };

    updateEntry = entry => {
        if (typeof entry.total !== "undefined") {
            entry.total = this.filterFloat(parseFloat(entry.total).toFixed(8));
        }

        if (entry.total === "Infinity") {
            entry.total = undefined;
            entry.currentValue = undefined;
            entry.action = undefined;
            entry.error = "Cannot divide by zero";
        } else if (entry.total > 9999999999 || entry.total < -9999999999) {
            entry.total = undefined;
            entry.currentValue = undefined;
            entry.action = undefined;
            entry.error = "Maximum Limit Reached";
        } else {
            entry.error = "";
        }

        this.setState({ entry });
    };

    render() {
        return (
            <div>
                <Header />
            <div id="calculator">
                <div id="title">
                    <h5>
                        <b>Electronic Calculator</b>
                    </h5>
                </div>
                <EntryBox entry={this.state.entry} />
                <div id="buttons">
                    {this.state.buttons.map((btn, i) => (
                        <Button
                            key={i}
                            label={btn.label}
                            value={btn.value}
                            id={btn.id}
                            type={btn.type}
                            entry={this.state.entry}
                            updateEntry={this.updateEntry}
                        />
                    ))}
                </div>
            </div>
            </div>
        );
    }
}

class Button extends Component {
    handleBtn = e => {
        let { total, action, currentValue } = { ...this.props.entry };
        const eventType = this.props.type,
            eventValue = e.currentTarget.value;

        if (
            typeof total !== "undefined" &&
            typeof action === "undefined" &&
            typeof currentValue === "undefined" &&
            eventType === "number"
        ) {
            total = undefined;
            currentValue = undefined;
            if (eventValue === ".") {
                currentValue = "0.";
            } else {
                currentValue = eventValue;
            }
        } else if (
            total &&
            action &&
            (typeof currentValue === "undefined" ||
                typeof currentValue !== "undefined") &&
            eventType === "number"
        ) {
            if (typeof currentValue !== "undefined") {
                let tmpNumber = currentValue.toString();
                if (tmpNumber.length >= 10) {
                    return;
                }
                if (tmpNumber.includes(".") && eventValue === ".") {
                    return;
                } else {
                    tmpNumber = tmpNumber + eventValue;
                }
                currentValue = tmpNumber;
            } else if (typeof currentValue === "undefined") {
                if (eventValue === ".") {
                    currentValue = "0.";
                } else {
                    currentValue = eventValue;
                }
            }
        } else if (
            total &&
            action &&
            (typeof currentValue === "undefined" ||
                typeof currentValue !== "undefined") &&
            eventType === "action"
        ) {
            if (typeof currentValue !== "undefined") {
                total =
                    action === "+"
                        ? parseFloat(total) + parseFloat(currentValue)
                        : action === "-"
                            ? parseFloat(total) - parseFloat(currentValue)
                            : action === "*"
                                ? parseFloat(total) * parseFloat(currentValue)
                                : parseFloat(total) / parseFloat(currentValue);
                currentValue = undefined;
            } else {
                action = eventValue;
            }
        } else if (
            total &&
            action &&
            (typeof currentValue === "undefined" ||
                typeof currentValue !== "undefined") &&
            eventType === "display"
        ) {
            total = parseFloat(total);
            currentValue =
                typeof currentValue === "undefined" ? total : parseFloat(currentValue);

            total =
                action === "+"
                    ? total + parseFloat(currentValue)
                    : action === "-"
                        ? total - parseFloat(currentValue)
                        : action === "*"
                            ? total * parseFloat(currentValue)
                            : total / parseFloat(currentValue);
            //   currentValue = total;
            action = undefined;
            currentValue = undefined;
        } else if (
            total &&
            typeof currentValue === "undefined" &&
            eventType === "action"
        ) {
            action = eventValue;
            currentValue = undefined;
        } else if (!total && !action && !currentValue && eventType === "number") {
            if (eventValue === ".") {
                currentValue = "0.";
            } else {
                currentValue = parseFloat(eventValue);
            }
        } else if (!total && !action && currentValue && eventType === "number") {
            let tmpNumber = currentValue.toString();
            if (tmpNumber.length >= 10) {
                return;
            }
            if (tmpNumber.includes(".") && eventValue === ".") {
                return;
            } else {
                tmpNumber = tmpNumber + eventValue.toString();
            }
            currentValue = tmpNumber;
        } else if (!total && !currentValue && eventType === "action") {
            total = 0;
            action = eventValue;
        } else if (!total && currentValue && eventType === "action") {
            total = currentValue;
            action = eventValue;
            currentValue = undefined;
        }

        if (eventType === "reset") {
            total = undefined;
            action = undefined;
            currentValue = undefined;
        }
        if (eventType === "cancel") {
            currentValue = undefined;
        }

        if (eventType === "toggleNegative") {
            if (
                typeof total !== "undefined" &&
                typeof currentValue === "undefined" &&
                typeof action === "undefined"
            ) {
                total = total * -1;
            } else if (
                typeof total !== "undefined" &&
                typeof currentValue !== "undefined" &&
                typeof action !== "undefined"
            ) {
                currentValue = currentValue * -1;
            } else if (
                typeof total === "undefined" &&
                typeof currentValue !== "undefined" &&
                typeof action === "undefined"
            ) {
                currentValue = currentValue * -1;
            }
        }

        if (eventType === "percent") {
            if (
                typeof total !== "undefined" &&
                typeof currentValue !== "undefined"
            ) {
                currentValue = parseFloat(currentValue) / 100;
            }
        }

        this.props.updateEntry({ total, action, currentValue });

        // console.log(
        //   `Total : ${total}, Action : ${action}, Value : ${currentValue}`
        // );
    };
    render() {
        return (
            <button
                id={this.props.id}
                value={this.props.value}
                onClick={this.handleBtn}
            >
                {this.props.label}
            </button>
        );
    }
}


class EntryBox extends Component {
    render() {
        const { total, currentValue, error } = { ...this.props.entry };
        return (
            <div id="entry-box">
                <div id="entry">
                    <p id="answer">
                        {currentValue !== undefined
                            ? currentValue
                            : total !== undefined ? total : 0}
                    </p>
                </div>
                <div id="history">{error}</div>
            </div>
        );
    }
}

const css = {
    header: {
        backgroundColor: "#171717",
        padding: "1em",
        color: "#FFCE00",
        fontSize: "2.8em",
        textAlign: "center",
        textTransform: "uppercase",
        fontWeight: "300"

    }
}

export default Calculator;