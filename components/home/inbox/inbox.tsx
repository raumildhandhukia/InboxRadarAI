"use client";
import { InboxContext } from "@/context/inbox-context";
import React, { useContext, useTransition } from "react";
import EmailList from "@/components/home/inbox/email-list";
import Paginations from "@/components/home/inbox/pagination";
import { EmailListSkeleton } from "@/components/home/inbox/skeleton";

import { useState, useEffect } from "react";
import {
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { start } from "repl";

interface InboxProps {
  type: string | null;
}
const Inbox: React.FC<InboxProps> = ({ type }) => {
  const [refreshEmails, setRefreshEmails] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [pageTokens, setPageTokens] = useState<string[] | [null]>([null]);
  const { emails, setEmails } = useContext(InboxContext);
  const [isLoading, startTransition] = useTransition();

  const handleRefresh = () => {
    setRefreshEmails(true);
  };

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `/api/mail?page=${pageTokens[Math.max(page - 1, 0)]}&type=${type}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      setEmails(data.emails);
      setPageTokens((prev) => {
        prev[page] = data.nextPageToken;
        return prev;
      });
    };
    if (refreshEmails) {
      startTransition(async () => {
        await getData();
      });
      setRefreshEmails(false);
    }
    getData();
  }, [page, pageTokens, setEmails, refreshEmails, type]);
  const Prev = () => (
    <button
      disabled={page === 1}
      className={`${page === 1 ? "text-muted-foreground cursot-default" : ""}`}
      onClick={() => {
        setPage((prev) => Math.max(prev - 1, 1));
      }}
    >
      <PaginationPrevious noHover={page === 1} />
    </button>
  );
  const Current = () => <PaginationLink noHover>{page}</PaginationLink>;
  const Next = () => (
    <button
      disabled={pageTokens[page] === undefined}
      className={`${
        pageTokens[page] === undefined ? "text-muted cursot-default" : ""
      }`}
      onClick={() => {
        setPage((prev) => prev + 1);
      }}
    >
      <PaginationNext noHover={pageTokens[page] === undefined} />
    </button>
  );

  return (
    <div>
      {isLoading ? (
        <EmailListSkeleton />
      ) : (
        <EmailList
          emails={emails}
          setEmails={setEmails}
          refresh={handleRefresh}
        >
          <Paginations prev={<Prev />} current={<Current />} next={<Next />} />
        </EmailList>
      )}
    </div>
  );
};

export default Inbox;
