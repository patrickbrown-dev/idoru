var Reader = React.createClass({
  render: function() {
    return (
      <div class="page">
        <RefreshButton source="/api/articles/refresh.json"/>
        <Articles source="/api/articles.json" />
      </div>
    );
  }
});

var Articles = React.createClass({
  getInitialState: function() {
    return { articles: [] };

  },

  componentDidMount: function() {
    $.get(this.props.source, function(result) {
      if (this.isMounted()) {
        this.setState({ articles: result });
      }
    }.bind(this));
  },

  render: function() {
    var articles = this.state["articles"];
    return (
      <div class="articles">{
        articles.map(function(article) {
          return ( <Article article={article} /> );
        })
      }</div>
    );
  }
});

var Article = React.createClass({
  render: function() {
    return (
      <div class="article">
        <h4>
          <a href={this.props.article["url"]}>
            {this.props.article["title"]}
          </a>
          <small class="text-muted">
            <em>&nbsp;{this.props.article["feed_title"]}</em>
          </small>
          <p><small class="text-muted">
            {this.props.article["published_at"]}
          </small></p>
        </h4>
      </div>
    );
  }
});

var RefreshButton = React.createClass({
  getInitialState: function() {
    return {liked: false};
  },
  handleClick: function(event) {
    $.get(this.props.source, function(result) {
      if (this.isMounted()) {
        this.setState({ articles: result });
      }
    }.bind(this));
  },
  render: function() {
    return (
      <button className={"btn btn-default"} onClick={this.handleClick}>
        <i className={"fa fa-refresh"}></i>
      </button>
    );
  }
});

React.render(
  <Reader />,
  document.getElementById("app")
);
