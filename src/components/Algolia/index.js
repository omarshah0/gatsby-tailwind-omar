import * as React from "react"
import {
  InstantSearch,
  Hits,
  SearchBox,
  RefinementList,
  Highlight,
  Configure,
  Pagination,
} from "react-instantsearch-dom"
import { searchClient } from "./client"

function Index() {
  return (
    <InstantSearch indexName="products" searchClient={searchClient}>
      <div className="min-h-screen bg-gray-50 p-4 font-sans">
        <div className="flex justify-center items-center w-full bg-white rounded-lg mb-8">
          <SearchBox />
        </div>
        <div className="flex gap-4">
          <div className="mb-4">
            <h2 className="text-center">Categories</h2>
            <RefinementList attribute="productCategory" />
            <Configure hitsPerPage={3} />
          </div>
          <div>
            <h2 className="text-center">Results Are</h2>
            <Hits hitComponent={Hit} />
          </div>
        </div>
        <div>
          <Pagination />
        </div>
      </div>
    </InstantSearch>
  )
}

function Hit(props) {
  return (
    <article className="max-w-xs rounded-lg p-4 bg-white">
      <header>
        <img src={props.hit.productImage} alt={props.hit.productImage}></img>
        <div className="hit-description"></div>
        <Highlight attribute="productName" hit={props.hit} />
      </header>
      <main>
        <h6>{props.hit.productCategory}</h6>
      </main>
    </article>
  )
}

export default Index
