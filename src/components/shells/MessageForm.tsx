import React from 'react'
import { CornerDownLeftIcon, MicIcon, PaperclipIcon } from 'lucide-react'

import {
    Button,
    Label,
    Textarea,
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '../ui'

const MessageForm = ({ processedText }) => {
    console.log(processedText)
    console.log('processedText')

    return (
        <form className="relative h-screen overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring">
            <Label className="sr-only">Message</Label>
            <Textarea
                className="h-[92%] resize-none border-0 p-3 shadow-none focus-visible:ring-0"
                id="message"
                value={processedText}
                placeholder="Extracted text will go here..."
            />
            <div className="flex items-center p-3 pt-0">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button size="icon-xs" variant="ghost">
                                <PaperclipIcon className="size-4" />
                                <span className="sr-only">Attach file</span>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="top">Attach File</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button size="icon-xs" variant="ghost">
                                <MicIcon className="size-4" />
                                <span className="sr-only">Use Microphone</span>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="top">
                            Use Microphone
                        </TooltipContent>
                    </Tooltip>
                    <Button className="ml-auto gap-1.5" size="sm" type="submit">
                        Send Message
                        <CornerDownLeftIcon className="size-3.5" />
                    </Button>
                </TooltipProvider>
            </div>
        </form>
    )
}

export default MessageForm
