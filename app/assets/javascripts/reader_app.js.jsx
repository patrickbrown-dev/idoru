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
          &nbsp;({this.props.article["feed_title"]})
        </small>
      </h4>
      <small class="text-muted">
        {this.props.article["published_at"]}
      </small>
      </div>
    );
  }
});

React.render(
  <Articles source="/api/articles.json" />,
  document.getElementById("app")
);
