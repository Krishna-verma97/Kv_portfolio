import { buildSearchIndex } from "../search/indexer";
import { createSearchEngine } from "../search/searchEngine";
import { loadSearchSources } from "../search/searchSources";

class KnowledgeStore {
  constructor() {
    this.engine = null;
    this.documents = [];
  }

  async initialize() {
    if (this.engine) return;

    this.documents = await loadSearchSources();

    const index = buildSearchIndex(this.documents);

    this.engine = createSearchEngine(index);
  }

  async search(query) {
    await this.initialize();

    if (!query || !query.trim()) {
      return [];
    }

    return this.engine.search(query);
  }

  async getDocuments() {
    await this.initialize();

    return this.documents;
  }

  async refresh() {
    this.engine = null;
    this.documents = [];

    await this.initialize();
  }
}

export const knowledgeStore = new KnowledgeStore();
