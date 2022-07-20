import React, {Component} from "react";

class Card extends Component {
    render() {
        var cardStyle = {
            height: 210,
            // width: 100,
            padding: 1,
            WebkitFilter: "drop-shadow(0px 0px 5px #666)",
            filter: "drop-shadow(0px 0px 5px #666)",
        };

        var squareStyle = {
            height: 200,
            padding: 0,
            margin: 0
        };

        var tableStyle = {
            fontFamily: "sans-serif",
            padding: 0,
            margin: 0,
            backgroundColor: "#111",
            height: 200,
        };

        var titleStyle = {
            fontFamily: "sans-serif",
            fontWeight: "bold",
            height: 30,
            paddingLeft: 10,
            width: 1500
        };

        var textStyle = {
            paddingLeft: 10,
            width: 1500
        };

        return (
            <div style={cardStyle}>
                <table className={this.props.id} style={tableStyle}>
                    <tr>
                        <td rowspan="2"><img style={squareStyle} src={require("./images/" + this.props.img).default}/></td>
                        <td style={titleStyle}><p>{this.props.title}</p></td>
                    </tr>
                    <tr>
                        <td valign="top" style={textStyle}>
                            <p>{this.props.text}</p>
                            <p>{this.props.textOption}</p>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Card;