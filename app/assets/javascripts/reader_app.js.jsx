var Reader = React.createClass({
  getInitialState: function() {
    return {
      articles: [],
      flash: {type: "info", message: "(◡ ‿ ◡ ✿)"}
    };
  },

  refreshClick: function(event) {
    this.setState({
      flash: {type: "warning", message: "Refreshing feeds..."}
    });
    $.get(this.props.refreshUrl, function(result) {
      this.setState({
        articles: result,
        flash: {type: "success", message: "Feeds refreshed. (◡ ‿ ◡ ✿)"}
      });
    }.bind(this))
        .fail(function(result) {
          this.setState({
            flash: {type: "danger", message: "Uh-oh! Something went wrong! ლ(ಠ益ಠლ)"}
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
        flash: {type: "success", message: "Feed added. (◡ ‿ ◡ ✿)"}
      });
    }.bind(this))
        .fail(function(result) {
          this.setState({
            flash: {type: "danger", message: "Couldn't parse feed from url or you're already subscribed. ლ(ಠ益ಠლ)"}
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
        <div className={""}>
          <Header />
          {this.state["flash"] ? <Flash flash={this.state["flash"]} /> : ""}
      <div className={"input-group"}>
        <input type={"text"} className={"form-control"} value={newFeedValue} onChange={this.handleChange} />
        <span className={"input-group-btn"}>
          <NewFeedButton onClick={this.newFeedClick} />
          <RefreshButton onClick={this.refreshClick} />
        </span>
      </div>
      <Articles articles={this.state["articles"]} />
          <Footer />
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

var Header = React.createClass({
  render: function() {
    return (
      <header>
        <div className={"pull-right"}>
          <ul className={"nav nav-pills"}>
            <li role={"presentation"}>
              <a href="http://cabaltherapy.com">Blog</a>
            </li>
            <li>
              <a data-method="delete" href="/users/sign_out" rel="nofollow">Sign Out</a>
            </li>
          </ul>
        </div>
        <h1>Idoru</h1>
      </header>
    );
  }
});

var Footer = React.createClass({
  render: function() {
    return (
      <footer>
        <hr />
        <p className={"text-center"}>Idoru was made by <a href={"http://github.com/ptrckbrwn"}>ptrckbrwn</a> with <span className={"text-danger"}><i className={"fa fa-heart"}></i></span>.</p>
      </footer>
    );
  }
});

React.render(
  <Reader articlesUrl="/api/articles"
          refreshUrl="/api/articles/refresh"
          newFeedUrl="/api/feeds" />,
  document.getElementById("app")
);
