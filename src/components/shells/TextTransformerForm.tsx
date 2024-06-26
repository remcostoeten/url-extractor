import React, { useState } from 'react'
import { Label } from '@radix-ui/react-dropdown-menu'

import PasteFromClipboard from '../tool-logic/PasteFromClipboard'
import removeNonURLs from '../tool-logic/RemoveNonUrl'
import { Button, Input, Textarea } from '../ui'
import AmountInput from './AmountInput'
import FormIntroShell from './FormIntroShell'

export default function TextTransformerForm({ title, setProcessedText }) {
    const [inputText, setInputText] = useState('')
    const [processedText, setProcessedTextState] = useState('')

    const handleRemoveNonURLs = () => {
        const processed = removeNonURLs(inputText)
        setProcessedTextState(processed)
        setProcessedText(processed)
    }

    return (
        <FormIntroShell title={title}>
            <div className="relative flex flex-col gap-4">
                <Label> Input Text</Label>
                <div className="i flex flex-col justify-start gap-2">
                    <div className="relative">
                        <Textarea
                            className="min-h-[150px]"
                            id="text-input"
                            placeholder="Paste text here to apply magic 🔮"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                        />
                        <PasteFromClipboard
                            targetId="text-input"
                            position={{ top: '10px', right: '10px' }}
                        />
                    </div>
                    <div className="grid gap-3">
                        <p>
                            Enter any character that the line should contain
                            that you want to <b className="underline">keep</b>
                        </p>
                        <Input id="keep-string" placeholder="Enter character" />
                        <AmountInput />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <Button
                            variant="outline"
                            className="text-xs"
                            onClick={handleRemoveNonURLs}
                        >
                            Remove all non URLs
                        </Button>
                        <Button>Remove all lines except with character</Button>
                    </div>
                </div>
                <Label>Processed Text</Label>
            </div>
        </FormIntroShell>
    )
}
