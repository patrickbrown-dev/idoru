var Reader = React.createClass({
  getInitialState: function() {
    return { articles: [] };
  },

  handleClick: function(event) {
    $.get(this.props.source, function(result) {
      console.log("handleclick called.")
      this.setState({ articles: result });
    }.bind(this));
  },

  componentDidMount: function() {
    $.get(this.props.source, function(result) {
      if (this.isMounted()) {
        this.setState({ articles: result });
      }
    }.bind(this));
  },

  render: function() {
    return (
      <div class="page">
        <RefreshButton source="/api/articles/refresh.json" onClick={this.handleClick} />
        <Articles articles={this.state["articles"]} />
      </div>
    );
  }
});

var Articles = React.createClass({
  render: function() {
    return (
      <div class="articles">{
        this.props.articles.map(function(article) {
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
  render: function() {
    return (
      <button className={"btn btn-default"} onClick={this.props.onClick}>
        <i className={"fa fa-refresh"}></i>
      </button>
    );
  }
});

React.render(
  <Reader source="/api/articles.json" />,
  document.getElementById("app")
);
