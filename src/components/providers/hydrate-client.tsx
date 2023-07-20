"use client"

import { HydrateProps, Hydrate as RQHydrate } from "@tanstack/react-query"

function ReactQueryHydrate(props: HydrateProps) {
  return <RQHydrate {...props} />
}

export default ReactQueryHydrate
