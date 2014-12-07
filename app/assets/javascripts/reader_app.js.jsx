var Reader = React.createClass({
  getInitialState: function() {
    return {
      articles: [],
      flash: {type: "info", message: "I'm going to let you in on a little secret: every day, once a day, give yourself a present. Don't plan it; don't wait for it; just let it happen."}
    };
  },

  refreshClick: function(event) {
    this.setState({
      flash: {type: "warning", message: "Refreshing feeds..."}
    });
    $.get(this.props.refreshUrl, function(result) {
      this.setState({
        articles: result,
        flash: {type: "success", message: "Feeds refreshed."}
      });
    }.bind(this));
  },

  handleChange: function(event) {
    this.setState({newFeedValue: event.target.value});
  },

  newFeedClick: function(event) {
    var url = this.state.newFeedValue;
    this.setState({
      flash: {type: "warning", message: "Adding feed..."}
    });
    $.post(this.props.newFeedUrl, {feed: {url: url}}, function(result) {
      this.setState({
        articles: result,
        flash: {type: "success", message: "Feed added."}
      });
    }.bind(this));
  },

  componentDidMount: function() {
    $.get(this.props.articlesUrl, function(result) {
      if (this.isMounted()) {
        this.setState({ articles: result });
      }
    }.bind(this));
  },

  render: function() {
    var newFeedValue = this.state.newFeedValue;
    return (
      <div className={"row"}>
        <div className={"col-sm-6 col-sm-offset-3"}>
          <h1>Cooper <small>The damn simple RSS reader.</small></h1>
        <div className={"page"}>
          {this.state["flash"] ? <Flash flash={this.state["flash"]} /> : ""}
      <div className={"input-group"}>
        <input type={"text"} className={"form-control"} value={newFeedValue} onChange={this.handleChange} />
        <span className={"input-group-btn"}>
          <NewFeedButton onClick={this.newFeedClick} />
          <RefreshButton onClick={this.refreshClick} />
        </span>
      </div>
      <Articles articles={this.state["articles"]} />
        </div>
        </div>
      </div>
    );
  }
});

var Flash = React.createClass({
  render: function() {
    return (
      <div className={"alert alert-" + this.props.flash.type}>
        {this.props.flash.message}
      </div>
    );
  }
});

var Articles = React.createClass({
  render: function() {
    return (
      <div className={"articles"}>{
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
      <div className={"article"}>
        <h4>
          <a href={this.props.article["url"]}>
            {this.props.article["title"]}
          </a>
          <small className={"text-muted"}>
            <em>&nbsp;{this.props.article["feed_title"]}</em>
          </small>
          <p><small className={"text-muted"}>
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

var NewFeedButton = React.createClass({
  render: function() {
    return (
      <button className={"btn btn-primary"} onClick={this.props.onClick}>
        <i className={"fa fa-plus"}></i>
      </button>
    );
  }
});

React.render(
  <Reader articlesUrl="/api/articles.json"
          refreshUrl="/api/articles/refresh.json"
          newFeedUrl="/api/feeds" />,
  document.getElementById("app")
);
