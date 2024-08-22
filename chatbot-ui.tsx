import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SendIcon, UploadIcon, SettingsIcon, CopyIcon, FileIcon } from 'lucide-react'
import { toast } from "@/components/ui/use-toast"

export default function Component() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! How can I assist you today?' },
    { role: 'user', content: 'Can you help me with a coding problem?' },
    { role: 'assistant', content: 'Of course! I\'d be happy to help. What specific coding problem are you facing?' },
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [selectedModel, setSelectedModel] = useState('gpt-3.5-turbo')
  const [temperature, setTemperature] = useState(0.7)
  const [streamResponse, setStreamResponse] = useState(true)
  const [aiPersonality, setAiPersonality] = useState('neutral')

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { role: 'user', content: inputMessage }])
      setInputMessage('')
      // Here you would typically call your AI service to get a response
    }
  }

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      // Handle file upload logic here
      console.log('File uploaded:', file.name)
    }
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "Copied to clipboard",
        description: "The message has been copied to your clipboard.",
      })
    }).catch((err) => {
      console.error('Failed to copy text: ', err)
    })
  }

  const exportToPDF = () => {
    // This is a placeholder function. In a real application, you would use a library like jsPDF to generate the PDF.
    toast({
      title: "Export to PDF",
      description: "This feature would export the conversation to a PDF file.",
    })
    console.log("Exporting conversation to PDF...")
    // The actual implementation would involve creating a PDF with the conversation content
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardContent className="p-6">
        <Tabs defaultValue="chat">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="chat">Chat</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="chat" className="mt-0">
            <div className="flex flex-col h-[600px]">
              <ScrollArea className="flex-grow mb-4 border rounded-lg p-4">
                {messages.map((message, index) => (
                  <div key={index} className={`flex items-start mb-4 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex items-start ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                      <Avatar className="w-8 h-8 mr-2">
                        <AvatarImage src={message.role === 'user' ? "/placeholder-user.jpg" : "/placeholder-bot.jpg"} />
                        <AvatarFallback>{message.role === 'user' ? 'U' : 'A'}</AvatarFallback>
                      </Avatar>
                      <div className={`rounded-lg p-2 max-w-[80%] ${message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                        {message.content}
                        {message.role === 'assistant' && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="ml-2"
                            onClick={() => copyToClipboard(message.content)}
                          >
                            <CopyIcon className="h-4 w-4" />
                            <span className="sr-only">Copy to clipboard</span>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </ScrollArea>
              <div className="flex items-center space-x-2">
                <Select value={selectedModel} onValueChange={setSelectedModel}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select AI Model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
                    <SelectItem value="gpt-4">GPT-4</SelectItem>
                    <SelectItem value="claude-v1">Claude v1</SelectItem>
                  </SelectContent>
                </Select>
                <Input type="file" id="file-upload" className="hidden" onChange={handleFileUpload} />
                <Button variant="outline" size="icon" onClick={() => document.getElementById('file-upload').click()}>
                  <UploadIcon className="h-4 w-4" />
                </Button>
                <Textarea
                  placeholder="Type your message here..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  className="flex-grow"
                />
                <Button onClick={handleSendMessage}>
                  <SendIcon className="h-4 w-4 mr-2" /> Send
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="settings" className="mt-0">
            <div className="flex flex-col h-[600px]">
              <ScrollArea className="flex-grow space-y-4 pr-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label htmlFor="stream-response" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Stream Response
                    </label>
                    <Switch
                      id="stream-response"
                      checked={streamResponse}
                      onCheckedChange={setStreamResponse}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="temperature" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Temperature: {temperature}
                    </label>
                    <Slider
                      id="temperature"
                      min={0}
                      max={1}
                      step={0.1}
                      value={[temperature]}
                      onValueChange={(value) => setTemperature(value[0])}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="ai-personality" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      AI Personality
                    </label>
                    <Select value={aiPersonality} onValueChange={setAiPersonality}>
                      <SelectTrigger id="ai-personality">
                        <SelectValue placeholder="Select AI Personality" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="neutral">Neutral</SelectItem>
                        <SelectItem value="friendly">Friendly</SelectItem>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="humorous">Humorous</SelectItem>
                        <SelectItem value="empathetic">Empathetic</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="pt-4">
                    <Button onClick={exportToPDF} className="w-full">
                      <FileIcon className="h-4 w-4 mr-2" /> Export Conversation to PDF
                    </Button>
                  </div>
                </div>
              </ScrollArea>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
