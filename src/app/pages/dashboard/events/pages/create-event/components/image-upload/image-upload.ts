import { Component, computed, input, output, signal } from '@angular/core';
import { Text } from '../../../../../../../shared/components/app-ui/text/text';
import { Icon } from '../../../../../../../shared/components/app-ui/icon/icon';

const ACCEPTED = ['image/png', 'image/jpeg', 'image/webp'];

@Component({
  imports: [Text, Icon],
  selector: 'app-image-upload',
  styleUrl: './image-upload.css',
  templateUrl: './image-upload.html',
})
export class ImageUpload {
  label = input('Cover image (optional)');
  previewUrl = input<string | null>(null);
  maxSizeMb = input(5);

  selected = output<File>();
  removed = output<void>();

  protected readonly error = signal<string | null>(null);
  protected readonly dragging = signal(false);
  protected readonly hint = computed(() => `PNG, JPG or WebP, up to ${this.maxSizeMb()} MB`);

  protected onPick(event: Event, input: HTMLInputElement): void {
    this.take((event.target as HTMLInputElement).files?.[0]);
    input.value = ''; // allows picking the same file again
  }

  protected onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.dragging.set(true);
  }

  protected onDrop(event: DragEvent): void {
    event.preventDefault();
    this.dragging.set(false);
    this.take(event.dataTransfer?.files?.[0]);
  }

  private take(file?: File): void {
    if (!file) return;
    if (!ACCEPTED.includes(file.type)) {
      this.error.set('Use a PNG, JPG or WebP image.');
    } else if (file.size > this.maxSizeMb() * 1024 * 1024) {
      this.error.set(`That image is over ${this.maxSizeMb()} MB.`);
    } else {
      this.error.set(null);
      this.selected.emit(file);
    }
  }
}
