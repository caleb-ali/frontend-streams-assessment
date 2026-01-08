import { useState } from "react";
import Layout from "@/components/layouts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BetaBadge } from "@/components/ui/beta-badge";
import streamsData from "@/data/streamsData.json";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { StackedCards } from "@/components/ui/stacked-cards";

export default function Streams() {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const frequentQuestions = [
    "Excepteur sint occaecat cupidatat?",
    "Excepteur sint occaecat cupidatat?",
  ];

  const handleAnalyze = () => {
    setShowResults(true);
  };

  const handleFrequentQuestion = (question: string) => {
    setQuery(question);
    setShowResults(true);
  };

  return (
    <Layout>
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between mt-4 mb-4 mx-4">
          <div>
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full text-[16px] text-[#4F566B] hover:text-gray-700">
                <span className="text-[#4F566B] text-[14px]">Ask Stream</span>
                <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-1.5">
                <div className="text-[16px] text-gray-600 truncate cursor-pointer hover:text-[#4F566B] hover:bg-[#EFEFFF] px-2 py-1.5 rounded transition-colors duration-150"></div>
              </CollapsibleContent>
            </Collapsible>
          </div>
          <div>
            <span className="text-[#4F566B] text-[14px]">Show History</span>
          </div>
        </div>
        <Separator className="my-0" />

        <div className="space-y-2 max-w-[972px] mx-auto w-full mt-8 md:mt-20 px-4">
          <h1
            className="text-[32px] md:text-[57px] font-semibold leading-[40px] md:leading-[64px] tracking-[-0.25px]"
            style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
          >
            <span className="bg-gradient-to-r from-[#6059FA] to-[#282465] bg-clip-text text-transparent">
              Ask Stream
            </span>
          </h1>
          <h1
            className="text-[32px] md:text-[57px] font-semibold leading-[40px] md:leading-[64px] tracking-[-0.25px]"
            style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
          >
            <span className="text-gray-400">lorem ipsum</span>
          </h1>
        </div>

        {/* Input Section */}
        <div className="space-y-4 max-w-[972px] mx-auto w-full mt-8 px-4">
          <div className="relative h-[104px]">
            <Input
              placeholder="Ask anything"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-full text-[#959AA6] placeholder:text-[#959AA6] text-[16px] border border-[#EDEEF0] rounded-2xl pl-4 pr-24 items-start pb-[40px]"
            />

            <div className="absolute left-4 bottom-4 flex items-center gap-2 text-xs">
              <BetaBadge text="Beta" />
              <span className="text-[#959AA6] text-[14px]">
                Conversational Analytics
              </span>
            </div>

            <Button
              onClick={handleAnalyze}
              className="absolute right-4 bottom-4 bg-gray-400 hover:bg-gray-500"
            >
              Analyze
            </Button>
          </div>

          {/* Frequent Questions */}
          {!showResults && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {frequentQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  onClick={() => handleFrequentQuestion(question)}
                  className="h-14 flex items-center justify-between px-[17px] text-base leading-6 font-normal text-[#4F566B] border border-[#EDEEF0] rounded-2xl hover:bg-gray-50"
                >
                  <span>{question}</span>
                  <span>→</span>
                </Button>
              ))}
            </div>
          )}
        </div>

        {/* Results Section */}
        {showResults && (
          <>
            <Separator className="my-0 mt-8 md:mt-16" />
            <div className="flex flex-col md:flex-row">
              {/* Sidebar - Left on desktop, bottom on mobile */}
              <div className="w-full md:w-1/5 p-4 md:mt-2 md:ml-2 md:mr-2 md:relative order-2 md:order-1">
                {/* Bookmarks */}
                <div>
                  <h3 className="text-[16px] font-[500] text-[#959AA6] mb-3">
                    Bookmarks
                  </h3>
                  <div className="space-y-2">
                    {streamsData.bookmarks.map((bookmark, index) => (
                      <div
                        key={index}
                        className="text-[16px] text-gray-600 truncate cursor-pointer hover:text-[#4F566B] hover:bg-[#EFEFFF] px-2 py-1.5 rounded transition-colors duration-150"
                      >
                        {bookmark}
                      </div>
                    ))}
                  </div>
                </div>

                {/* History */}
                <div className="mt-8">
                  <h3 className="text-[16px] font-[500] text-[#959AA6] mb-3">
                    History
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(streamsData.history).map(
                      ([period, items]) => (
                        <Collapsible key={period} defaultOpen>
                          <CollapsibleTrigger className="flex items-center justify-between w-full text-[16px] text-[#4F566B] mb-2 hover:text-gray-700">
                            <span>{period}</span>
                            <ChevronDown className="h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="space-y-1.5">
                            {items.map((item, index) => (
                              <div
                                key={index}
                                className="text-[16px] text-gray-600 truncate cursor-pointer hover:text-[#4F566B] hover:bg-[#EFEFFF] px-2 py-1.5 rounded transition-colors duration-150"
                              >
                                {item}
                              </div>
                            ))}
                          </CollapsibleContent>
                        </Collapsible>
                      )
                    )}
                  </div>
                </div>

                {/* Beta badge */}
                <div className="mt-8 md:absolute md:left-0 md:bottom-4 flex items-center gap-2 text-xs">
                  <BetaBadge text="Beta" />
                  <span className="text-[#959AA6] text-[14px]">
                    Knowledge base
                  </span>
                </div>
              </div>

              <Separator className="hidden md:block" orientation="vertical" />

              {/* Sections Grid - Right on desktop, top on mobile */}
              <div className="w-full md:w-4/5 p-4 md:m-8 order-1 md:order-2">
                <div className="flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-200 rounded-lg overflow-hidden">
                    {/* Section 1 - Top Left */}
                    <div className="border-b md:border-r md:border-b border-gray-200 p-6 space-y-3">
                      <h2 className="text-lg font-semibold text-gray-900">
                        {streamsData.sections.section1.title}
                      </h2>
                      <h3 className="text-base font-medium text-gray-900">
                        {streamsData.sections.section1.heading}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {streamsData.sections.section1.content}
                      </p>
                      <button className="text-indigo-600 text-sm font-medium hover:underline flex items-center gap-1">
                        <BetaBadge text="Chip" />
                      </button>
                    </div>

                    {/* Section 2 - Top Right */}
         
<div className="border-b p-6 space-y-3 relative min-h-[300px] md:min-h-[222.75px]">
  <StackedCards />
</div>

                    {/* Section 3 - Bottom Left */}
                    <div className="border-b md:border-r md:border-b-0 border-gray-200 p-6 space-y-3">
                      <h2 className="text-lg font-semibold text-gray-900">
                        {streamsData.sections.section3.title}
                      </h2>
                      <h3 className="text-base font-medium text-gray-900">
                        {streamsData.sections.section3.heading}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {streamsData.sections.section3.content}
                      </p>
                    </div>

                    {/* Data Sources - Bottom Right */}
                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <h2 className="text-[16px] font-[500] text-[#959AA6]">
                          Data Source
                        </h2>
                        <select className="text-xs border border-gray-300 rounded px-2 py-1">
                          <option>All</option>
                        </select>
                      </div>
                      <div className="space-y-3">
                        {streamsData.dataSources.map((source, index) => (
                          <div key={index} className="space-y-1.5">
                            <div className="flex justify-between items-center">
                              <div>
                                <span className="text-sm font-medium text-gray-900">
                                  {source.name}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-gray-400">
                                  {source.date}
                                </span>
                                <img
                                  src="/icons/pdf.svg"
                                  alt=""
                                  className="w-4 h-4 rotate-[180deg]"
                                />
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 leading-relaxed">
                              {source.preview}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
