# be-enhancing

Enhance a remote element and pull in a reference to the enhancement or a key property of the enhancement.

```html
<button name=dirPick disabled>Pick directory</button>

<details itemscope=dir 
    be-enhancing="@dirPick with 📁⛏️ and set $0?.ish?.handle to directoryHandle."
>
    <summary itemprop=name></summary>
</details>
```
