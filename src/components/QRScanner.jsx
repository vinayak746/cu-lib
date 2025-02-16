import { useEffect, useState } from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode'
import { toast } from 'react-toastify'

export default function QRScanner({ onScanSuccess }) {
  const [scanner, setScanner] = useState(null)

  useEffect(() => {
    const qrScanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    })

    qrScanner.render(success, error)
    setScanner(qrScanner)

    return () => {
      if (scanner) {
        scanner.clear()
      }
    }
  }, [])

  const success = (result) => {
    if (scanner) {
      scanner.clear()
    }
    try {
      const data = JSON.parse(result)
      onScanSuccess(data)
    } catch (err) {
      toast.error('Invalid QR code format')
    }
  }

  const error = (err) => {
    console.warn(err)
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div id="reader" className="w-full"></div>
    </div>
  )
}