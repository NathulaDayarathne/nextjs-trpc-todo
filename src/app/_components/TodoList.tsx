"use client";
import { trpc } from "../_trpc/client";

import React from "react";

export default function TodoList() {
  const getTodos = trpc.getTodos.useQuery();

  return (
    <div>
    <h1>To-Do List</h1>
      <div>{JSON.stringify(getTodos.data)}</div>
    </div>
  );

  
}
