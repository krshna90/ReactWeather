var React = require("react");

var ErrorModel = React.createClass({
  getDefaultProps: function(){
    return {
      title : "Error"
    };
  },
  propTypes :{
    title : React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function(){
      var modal = new Foundation.Reveal($("#error-modal"));
        modal.open();
  },
  render : function(){
    var {title, message} = this.props;
    return (
      <div id="error-modal" ref="error-modal" className="reveal tiny text-center" data-reveal>
        <h2>{title}</h2>
        <p>{message}</p>
        <button className="button hollow" data-close="">
          Okay
        </button>
      </div>
    );
  }
});
module.exports = ErrorModel;
