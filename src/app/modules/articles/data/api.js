import http from "../../../utils/http";

class ArticlesAPI {
  getArticles() {
    return http.get("/articles");
  }

  getArticlesByAuthor(author) {
    const params = { author };

    if (!author) {
      throw new Error("author param is undefined");
    }

    return http.get(`/articles`, { params });
  }

  getArticlesFavoritedByUser(favorited) {
    const params = { favorited };

    if (!favorited) {
      throw new Error("favorited param is undefined");
    }

    return http.get(`/articles`, { params });
  }

  getArticlesByTag(tag) {
    const params = { tag };

    if (!tag) {
      throw new Error("tag param is undefined");
    }

    return http.get(`/articles`, { params });
  }
}

export default new ArticlesAPI();
